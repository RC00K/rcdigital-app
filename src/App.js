import React, { useState, useEffect, useRef } from 'react';
import Experience from './Experience';
import About from './About';
import RepoCard from './RepoCard';
import Home from './Home';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from "./Navigation";
import Languages from './Languages';
import Education from './Education';

function App() {
  const [repos, setRepos] = useState([]);
  const username = "RC00K";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const reopData = await response.json();

        // Fetch Language Data For Each Repo
        for (const repo of reopData) {
          const languageResponse = await fetch(repo.languages_url);
          const languageData = await languageResponse.json();
          repo.languages = languageData;
        }

        setRepos(reopData);
      } catch (error) {
        console.error('Error fetching repos: ', error);
      }
    };
    
    fetchRepos();
  }, []);

  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = Math.ceil(repos.length / 9);

  const handleNextPage = () => {
    if (pageIndex + 1 < totalPages) {
      setPageIndex(prev => prev + 1);
    } else {
      setPageIndex(0);
    }
  };

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(prev => prev - 1);
    } else {
      setPageIndex(totalPages - 1);
    }
  };

  const currentRepos = repos.slice(pageIndex * 9, (pageIndex + 1) * 9);

  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App;

      {/* <div className="skills__container">
        <FontAwesomeIcon className="repo__nav chevron__left" icon={faChevronLeft} onClick={handlePrevPage} />
        <div className="repo__card__grid">
          {currentRepos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
        </div>
        <FontAwesomeIcon className="repo__nav chevron__right" icon={faChevronRight} onClick={handleNextPage} />
      </div> */}