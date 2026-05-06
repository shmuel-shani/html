let userRole = 'viewer';

// בדיקה האם המשתמש הוא עורך
const isUserEditor = userRole === "editor";

// בדיקה האם המשתמש הוא צופה - שים לב לשינוי השם כאן
const isUserViewer = userRole === "viewer"; 

console.log("isUserEditor:", isUserEditor);
console.log("isUserViewer:", isUserViewer);

if (isUserEditor) {
    console.log("you can edit this movie");
} else if (isUserViewer) {
    console.log("you can view this movie");
} else {
    console.log("you don't have access");
}