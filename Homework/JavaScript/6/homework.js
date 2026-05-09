function writeToPage(text) {
    // 1. מוצאים את הלוח לפי ה-ID שנתנו לו
    const board = document.getElementById('results-board');
    
    // 2. יוצרים שורה חדשה
    const newLine = document.createElement('p');
    
    // 3. כותבים בתוכה את הטקסט
    newLine.textContent = text;
    
    // 4. תולים את השורה על הלוח
    board.appendChild(newLine);
    
// Exercise 1: Primitives vs. Reference Types
let person1 = {
    name: "Shmuel",
    age: 25
};

let person2 = person1; // השמה של אובייקט (Reference)
person2.age = 99;

console.log("Exercise 1 - Objects:");
console.log("person1 age:", person1.age); // 99
console.log("person2 age:", person2.age); // 99

let score1 = 85;
let score2 = score1; // העתקה של ערך פרימיטיבי (Value)
score2 = 100;

console.log("Exercise 1 - Numbers:");
console.log("score1:", score1); // 85
console.log("score2:", score2); // 100

/*
ANSWER:
שינוי person2 השפיע על person1 כיוון שאובייקטים הם מסוג Reference. 
כשמשווים ביניהם, שני המשתנים מצביעים לאותה כתובת בזיכרון (אותה "קופסה").
לעומת זאת, מספרים הם פרימיטיביים - כשמשווים ביניהם נוצר עותק עצמאי לחלוטין בזיכרון.
*/

// --------------------------------------------------

// Exercise 2: Typing
let a = "15";
let b = 10;
let c = "2";

// המרת המחרוזת למספר בעזרת Number() או האופרטור +
let result = Number(a) + b; 

console.log("\nExercise 2:");
console.log("Addition Result:", result); // 25
console.log("Type of result:", typeof result); // number
console.log("Multiplication (a * c):", a * c); // 30

/*
ANSWER:
בפעולת כפל, JavaScript מבצעת המרה אוטומטית (Coercion). 
מכיוון שאין פעולת כפל בין מחרוזות, השפה "מניחה" שהתכוונו למספרים וממירה אותם זמנית לצורך החישוב. 
בחיבור זה לא קרה כי האופרטור + משמש גם לחיבור טקסט.
*/

// --------------------------------------------------

// Exercise 3: Block Scope
let secretMessage = "Hello";

if (true) {
    let secretMessage = "Goodbye"; // משתנה חדש שקיים רק בתוך ה-if
    var hackerMessage = "I am inside!";
    console.log("\nExercise 3 - Inside block:", secretMessage);
}

console.log("Outside block 1:", secretMessage); // Hello
console.log("Outside block 2:", hackerMessage); // I am inside!

/*
ANSWER:
1. כששינינו את var ל-let במשתנה hackerMessage, קיבלנו שגיאה (ReferenceError) 
מחוץ לבלוק, כי let מוגבל רק לסוגריים המסולסלים שבהם הוא נוצר (Block Scope), בעוד var "בורח" החוצה.
2. המשתנה secretMessage נשאר "Hello" בחוץ כי בפנים יצרנו משתנה חדש עם אותו שם (Shadowing).
הוא לא דרס את המשתנה החיצוני, אלא רק הסתיר אותו בתוך הבלוק.
*/

// --------------------------------------------------

// Exercise 4: Truthy and Falsy Values
const mixedValues = [0, "hello", "", null, 42, undefined, NaN, "false", [], {}];

console.log("\nExercise 4:");
for (let i = 0; i < mixedValues.length; i++) {
    if (mixedValues[i]) {
        console.log(`[${mixedValues[i]}] is Truthy`);
    } else {
        console.log(`[${mixedValues[i]}] is Falsy`);
    }
}

/*
ANSWER:
1. המחרוזת "false" היא Truthy! ב-JS כל מחרוזת שאינה ריקה היא אמת, גם אם כתוב בה המילה false.
2. מערך ריק [] הוא Truthy. ב-JS אובייקטים ומערכים הם תמיד אמת, גם אם הם ריקים.
הערכים שהם Falsy הם: 0, "", null, undefined, NaN וכמובן false.
*/