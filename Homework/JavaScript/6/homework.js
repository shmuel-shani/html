// --- פונקציית עזר: כתיבה ללוח המודעות בדף ---
function writeToPage(text) {
    // אנחנו מבקשים מהדפדפן: "מצא לי את האלמנט עם ה-ID שנקרא results-board"
    const board = document.getElementById('results-board');
    
    // אנחנו יוצרים אלמנט פסקה (p) חדש
    const newLine = document.createElement('p');
    
    // מכניסים לתוך הפסקה את הטקסט שקיבלנו
    newLine.textContent = text;
    
    // "תולים" את הפסקה החדשה בתוך הלוח
    board.appendChild(newLine);
}

// --- תרגיל 1: Primitives vs. Reference Types ---
// --- כאן אנחנו לומדים ש-JavaScript מתייחסת אחרת למספרים ולאובייקטים ---
// המשימה: ליצור אובייקט עם שם וגיל
let person1 = {
    name: "Shmuel",
    age: 25
};

// ליצור משתנה שני ולהצמיד אותו לראשון
let person2 = person1; 

// לשנות את הגיל רק ב-person2
person2.age = 99;

//  בוא נראה שגם אצלנו (person1) הגיל השתנה!
writeToPage("Ex 1 (Object): Person 1 age is now: " + person1.age); 
writeToPage("Ex 1 (Object): Person 2 age is now: " + person2.age);


// --- החלק השני של התרגיל (מספרים) ---
let score1 = 85;
let score2 = score1; // score2 הוא דף חדש - כאן נוצר עותק עצמאי
score2 = 100;        // שינינו רק את score2 - כי הוא עותק עצמאי

writeToPage("Ex 1 (Number): Score 1 stays: " + score1);
writeToPage("Ex 1 (Number): Score 2 changed to: " + score2);


// --- תרגיל 2: המרת סוגים (Type Conversions) ---
let a = "15"; 
let b = 10; 
let c = "2";
let result = Number(a) + b; // המרה למספר לקבלת 25 [cite: 3141]
writeToPage(`Ex 2: Result: ${result}, Type: ${typeof result}`);
writeToPage(`Ex 2: Multiplication (a * c): ${a * c}`); // JavaScript ממירה אוטומטית בכפל 



// --- תרגיל 3: Block Scope ---

// 1. משתנה גלובלי (בגינה)
let secretMessage = "Hello";

if (true) {
    // 2. יצירת משתנה עם אותו שם אבל בתוך הבית (Block Scope)
    // ה-let הזה "מסתיר" את השלט שבחוץ רק למי שנמצא בפנים
    let secretMessage = "Goodbye";
    
    // 3. משתנה var - הוא לא מכבד את הקירות של ה-if
    var hackerMessage = "I am inside!";
    
    writeToPage("Ex 3: Inside the block: " + secretMessage); // ידפיס Goodbye
}

// 4. כאן אנחנו בחוץ. המחשב חוזר להסתכל על השלט של הגינה
writeToPage("Ex 3: Outside 1: " + secretMessage); // ידפיס Hello

// 5. ה-var הצליח לצאת, אז המחשב מכיר אותו גם פה
writeToPage("Ex 3: Outside 2: " + hackerMessage); // ידפיס I am inside!


// --- תרגיל 4: אמת ושקר ---

const mixedValues = [0, "hello", "", null, 42, undefined, NaN, "false", [], {}];

// אנחנו עוברים על כל איבר ברשימה
for (let i = 0; i < mixedValues.length; i++) {
    let current = mixedValues[i];

    // כאן קורה הקסם: ה-if בודק אם הערך הוא Truthy או Falsy
    if (current) {
        // אם נכנסנו לכאן - זה Truthy
        writeToPage("[" + current + "] is Truthy");
    } else {
        // אם הגענו לכאן - זה Falsy
        writeToPage("[" + current + "] is Falsy");
    }
}

