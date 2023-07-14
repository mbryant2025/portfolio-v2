import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullWidthWidget from './FullWidthWidget';
import BackButton from './BackButton';
import './styles/article.css';

interface TechnicalArticleProps {
  htmlFilePath: string;
}

const TechnicalArticle: React.FC<TechnicalArticleProps> = ({ htmlFilePath }) => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState<string | null>(null);
  const [tableOfContents, setTableOfContents] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await axios.get(htmlFilePath);
        setHtmlContent(response.data);

        // Extract the title from the HTML content
        const titleRegex = /<title>(.*?)<\/title>/i;
        const titleMatch = response.data.match(titleRegex);
        if (titleMatch && titleMatch.length > 1) {
          setPageTitle(titleMatch[1]);
        }

        // Extract the table of contents from the HTML content
        const headingRegex = /<h2\b[^>]*>(.*?)<\/h2>/gi;
        const headingMatches = response.data.match(headingRegex);
        if (headingMatches && headingMatches.length > 0) {
          const tocElements = headingMatches.map((match: string, index: number) => {
            const headingTextRegex = /<h2\b[^>]*>(.*?)<\/h2>/i;
            const headingTextMatch = match.match(headingTextRegex);
            if (headingTextMatch && headingTextMatch.length > 1) {
              const headingText = headingTextMatch[1];
              const anchorId = `toc-${index}`;

              const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
                const targetElement = document.getElementById(anchorId);
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth',
                  });
                }
              };

              return (
                <li key={index} className="contentLink">
                  <a href={`#${anchorId}`} onClick={handleAnchorClick} className="tableOfContents">{headingText}</a>
                </li>
              );
            } else {
              return null;
            }
          });

          setTableOfContents(tocElements);
        }
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, [htmlFilePath]);

  useEffect(() => {
    // Assign IDs to h2 elements
    const headings = Array.from(document.getElementsByTagName("h2"));

    headings.forEach((heading, index) => {
      heading.id = `toc-${index}`;
    });
  }, [tableOfContents]);

  return (
    <div>
      <BackButton />
      {pageTitle && <h1 className="articleTitle">{pageTitle}</h1>}
      <div className="tableOfContentsColumn">
        {tableOfContents && (
          <div>
            <ul>{tableOfContents}</ul>
          </div>
        )}
      </div>
      <div className="articleColumn">
        <FullWidthWidget>
          {htmlContent ? (
            <div className="articleContent" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          ) : (
            <div></div>
          )}
        </FullWidthWidget>
      </div>
    </div>
  );
};

export default TechnicalArticle;
