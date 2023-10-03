function App() {
    return (
        <div>
            <button onClick={() => window.electronAPI.getFile()}>Upload File</button>
        </div>
    )
}

export default App;
