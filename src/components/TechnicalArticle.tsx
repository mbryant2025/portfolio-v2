import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FullWidthWidget from './FullWidthWidget';
import BackButton from './BackButton';
import './styles/article.css';
import PageBottom from './PageBottom';

interface TechnicalArticleProps {
  htmlFilePath: string;
}

const TechnicalArticle: React.FC<TechnicalArticleProps> = ({ htmlFilePath }) => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState<string | null>(null);
  const [subtitle, setSubtitle] = useState<string | null>(null);
  // const [showTableOfContents, setShowTableOfContents] = useState<boolean>(false);
  const [tableOfContents, setTableOfContents] = useState<JSX.Element[] | null>(null);
  const [gitHubLink, setGitHubLink] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await axios.get(htmlFilePath);
        const htmlData = response.data;

        // Extract the title and subtitle from the HTML content
        const titleRegex = /<title>(.*?)<\/title>/i;
        const titleMatch = htmlData.match(titleRegex);
        if (titleMatch && titleMatch.length > 1) {
          setPageTitle(titleMatch[1]);
        }

        const subtitleRegex = /<subtitle>(.*?)<\/subtitle>/i;
        const subtitleMatch = htmlData.match(subtitleRegex);
        if (subtitleMatch && subtitleMatch.length > 1) {
          setSubtitle(subtitleMatch[1]);
        }

        // Extract the GitHub link from the HTML content
        const githubLinkRegex = /<github>(.*?)<\/github>/i;
        const githubLinkMatch = htmlData.match(githubLinkRegex);
        if (githubLinkMatch && githubLinkMatch.length > 1) {
          setGitHubLink(githubLinkMatch[1]);
        }

        // Remove the subtitle and github from the HTML content
        const cleanedHtmlData = htmlData.replace(subtitleRegex, '').replace(githubLinkRegex, '');

        // Set the cleaned HTML content
        setHtmlContent(cleanedHtmlData);

        // Extract the table of contents from the HTML content
        const headingRegex = /<h2\b[^>]*>(.*?)<\/h2>/gi;
        const headingMatches = cleanedHtmlData.match(headingRegex);
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
                  <a href={`#${anchorId}`} onClick={handleAnchorClick} className="tableOfContents">
                    {headingText}
                  </a>
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

  // const toggleTableOfContents = () => {
  //   setShowTableOfContents(!showTableOfContents);
  // };

  return (
    <div className="articleContainer">
      <BackButton />
      {pageTitle && <h1 className="articleTitle">{pageTitle}</h1>}
      {subtitle && <h3 className="articleSubtitle">{subtitle}</h3>}
      {/* <div className="tableOfContentsColumn">
        <button className="hamburgerButton" onClick={toggleTableOfContents}>
          &#9776;
        </button>
        {showTableOfContents && tableOfContents && (
          <div>
            <ul>{tableOfContents}</ul>
          </div>
        )}
      </div> */}
      <div className= "articleColumnWide">
        <FullWidthWidget>
          {gitHubLink && <img src="/img/github.png" alt="GitHub" className="github" onClick={() => window.open(gitHubLink, '_blank')} />}
          <div className="spacer"></div>
          {htmlContent ? (
            <div className="articleContent" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          ) : (
            <div></div>
          )}
          <div className="spacer"></div>
        </FullWidthWidget>
      <PageBottom />

      </div>
    </div>
  );
};

export default TechnicalArticle;
