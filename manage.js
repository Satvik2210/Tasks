var content = {
  title: "",
  body: "",
  author: "",
  publishDate: ""
};

// Function to create new content
function createContent(title, body, author, publishDate) {
  var newContent = Object.create(content);
  newContent.title = title;
  newContent.body = body;
  newContent.author = author;
  newContent.publishDate = publishDate;
  return newContent;
}

// Example usage
var myContent = createContent("Sample Title", "This is the body of the content.", "John Doe", "2023-07-10");
console.log(myContent);

// Function to update content
function updateContent(existingContent, newTitle, newBody, newAuthor, newPublishDate) {
  existingContent.title = newTitle;
  existingContent.body = newBody;
  existingContent.author = newAuthor;
  existingContent.publishDate = newPublishDate;
}

// Example usage
updateContent(myContent, "Updated Title", "This is the updated body of the content.", "Jane Smith", "2023-07-11");
console.log(myContent);
