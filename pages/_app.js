import '../styles/global.css'; //global css style
const App=({Component, pageProps})=>{
    // app is the top component
    // keeps track of the global state
    // only place to add global css
    return<Component {...pageProps} />
};
export default App;