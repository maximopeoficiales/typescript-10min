// Interface
interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

// type
type Animal2 = {
    name: string
}

type Bear2 = Animal2 & {
    honey: boolean
}

// En una interface puedo volver a declararla y heredera su definicion 
interface Window1 {
    title: string
}

interface Window1 {
    ts: number
}

const dataWindow: Window1 = {
    ts: 1,
    title: "string",
}

// En los type no se puede sobreesscribir un tipo creado
type Window2 = {
    title: string
}

type Window2 = {
    ts: string
}