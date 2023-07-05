
// Maps the file name such as "tensorflow" to the name used for display "TensorFlow".
async function getFormattedName(item: string | undefined): Promise<string> {

    if (!item) {
        return '';
    }

    try {
      const response = await fetch('/name-map.json');
      const map = await response.json();
      
      const lowercaseItem = item.toLowerCase();
      return map[lowercaseItem] || item;
    } catch (error) {
      console.error('Error loading the map:', error);
      return item;
    }
  }

export default getFormattedName;