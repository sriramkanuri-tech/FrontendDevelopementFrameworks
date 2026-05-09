export let state = {
    employees: [
        { id: 1, name: "Subba", score: 70, present: true },
        { id: 2, name: "Rayudu", score: 85, present: false }
    ]
};

let listeners = [];

export function subscribe(listener) {
    listeners.push(listener);
}

export function setState(newState) {
    state = { ...state, ...newState };   // immutability
    listeners.forEach(l => l());
}