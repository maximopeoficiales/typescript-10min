// UNKNOWN
let notSure: unknown = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;

let myString: string = notSure;

//unknown vs any 
let notSure2: any = 4;
notSure2 = "maybe a string instead";
// OK, definitely a boolean
notSure2 = false;

let myString2: string = notSure2;


// caso de uso
function stringifyForLogging(value: unknown): string {
    if (typeof value === "function") {
        // Within this branch, `value` has type `Function`,
        // so we can access the function's `name` property
        const functionName = value.name || "(anonymous)";
        return `[function ${functionName}]`;
    }

    if (value instanceof Date) {
        // Within this branch, `value` has type `Date`,
        // so we can call the `toISOString` method
        return value.toISOString();
    }

    return String(value);
}


function stringifyForLogging2(value: any): string {
    if (typeof value === "function") {
        // Within this branch, `value` has type `Function`,
        // so we can access the function's `name` property
        const functionName = value.name || "(anonymous)";
        return `[function ${functionName}]`;
    }

    if (value instanceof Date) {
        // Within this branch, `value` has type `Date`,
        // so we can call the `toISOString` method
        return value.toISOString();
    }

    return String(value);
}


