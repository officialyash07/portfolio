'use client';

import Button from '../ui/button';

import classes from './resume.module.css';

const ResumeDownload = () => {
    const handleResumeDownload = () => {
        const resumePath = '/public/YashPathik_Resume.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'YashPathik_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button className={classes.resumeBtn} onClick={handleResumeDownload}>
            resume
        </Button>
    );
};

export default ResumeDownload;
