import React, { useCallback, useState } from 'react';
import { Header } from './components/Header/Header';
import './App.css';
import { Portfolio } from './components/Portfolio/Portfolio';
import { History } from './components/History/History';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Preview } from './components/Preview/Preview';

function App() {
    const [isPreviewShown, setIsPreviewShown] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');

    const handleClose = useCallback(() => setIsPreviewShown(false), []);
    const openPreview = useCallback((url: string) => {
        setPreviewUrl(url);
        setIsPreviewShown(true);
    }, []);

  return (
    <div className="app">
        <Header />
        <About />
        <Portfolio openPreview={openPreview} />
        <History />
        <Footer />
        {isPreviewShown && <Preview videoUrl={previewUrl} onClose={handleClose} />}
    </div>
  );
}

export default App;
