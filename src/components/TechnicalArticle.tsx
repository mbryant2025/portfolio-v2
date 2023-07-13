import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TechnicalArticleProps {
  htmlFilePath: string;
}

const TechnicalArticle: React.FC<TechnicalArticleProps> = ({ htmlFilePath }) => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await axios.get(htmlFilePath);
        setHtmlContent(response.data);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, [htmlFilePath]);

  return (
    <div>
      {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TechnicalArticle;
