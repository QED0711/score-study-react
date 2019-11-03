export default function bindStateMethods (stateMethods, self) {
    const bound = {}
    for( let sm of Object.keys(stateMethods)){
        bound[sm] = stateMethods[sm].bind(self)
    }
    return bound
}