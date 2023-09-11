import React, { useState, useEffect } from 'react';
import languageColors from './languages.json';

function RepoCard({ repo }) {
    const formattedDate = new Date(repo.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const [showAllLanguages, setShowAllLanguages] = useState(false);

    // Calculate Language Percentages
    const totalBytes = Object.values(repo.languages).reduce((acc, value) => acc + value, 0);
    const languagePercentages = {};

    for (const [lang, bytes] of Object.entries(repo.languages)) {
        const percentage = ((bytes / totalBytes) * 100).toFixed(2);
        languagePercentages[lang] = percentage;
    }

    // Get Language Color
    const getLanguageColor = (lang) => {
        return languageColors[lang]?.color || '#ccc';
    };

    // Gradient String From Languages Used
    const colors = Object.keys(repo.languages).map(lang => getLanguageColor(lang));
    const gradientString = `linear-gradient(to right, ${colors.join(', ')})`;

    // Gradient Border Color From Languages Used
    const gradientLanguageBottomBorder = Object.keys(repo.languages).length === 1 
        ? { '--gradient-string': getLanguageColor(Object.keys(repo.languages)[0]) }
        : { '--gradient-string': gradientString };

    useEffect(() => {
        if (showAllLanguages) {
            document.getElementById(`card_${repo.id}`).style.height = 'auto';
        } else {
            document.getElementById(`card_${repo.id}`).style.height = 'auto';
        }
    }, [showAllLanguages, repo.id]);

    if (!repo) {
        return null;
    }

    return (
        <div className="repo__card" id={`card_${repo.id}`} style={gradientLanguageBottomBorder}>
            <div className="repo__details">
                <h3>{repo.name}</h3>
                <p>
                    {repo.description || "No description available"}
                </p>
            </div>
            <div className="languages__container">
                <div className="languages">
                    {Object.keys(repo.languages).slice(0, showAllLanguages ? undefined : 3).map(lang => (
                        <span key={lang}>
                            <span className="language__dot" style={{ backgroundColor: getLanguageColor(lang) }}></span>
                            {lang} {languagePercentages[lang]}%
                        </span>
                    ))}
                </div>
            </div>
            {Object.keys(repo.languages).length > 3 && 
                <button className="languages__btn" onClick={() => setShowAllLanguages(!showAllLanguages)}>
                    {showAllLanguages ? 'Less' : 'All Languages Used'}
                </button>
            }
            <div className="repo__card__bottom">
                <div className="date__created">
                    <p><strong>Created on:</strong> {formattedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default RepoCard;