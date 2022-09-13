type Point = {
    x: number;
    y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });


//puedo declarar un tipo de dato
type WindowStates = "open" | "closed" | "minimized";
let state: WindowStates = "closed";
console.log(state);


export type User = {
    userId: number;
    name: string;
};

export type GetUserApi = {
    PathParams: {
        userId: number;
    };
    ResponseBody: User;
};

const getUserApi: GetUserApi["ResponseBody"] = {
    name: "lkjadlksj",
    userId: 3,
}
console.log(getUserApi);