import React, { useState, useEffect } from 'react';
import { Heart, X, Flame, Search, SlidersHorizontal, Film, Star, Clock, Calendar, TrendingUp, ChevronDown, Play, Plus, Check } from 'lucide-react';

export default function MovieDiscoveryApp() {
  // App state
  const [currentView, setCurrentView] = useState('onboarding'); // onboarding, profile-builder, discovery
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [userPreferences, setUserPreferences] = useState({
    loved: [],
    liked: [],
    disliked: []
  });
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  
  // Filter state
  const [filters, setFilters] = useState({
    genres: [],
    platforms: [],
    contentRating: [],
    imdbMin: 0,
    rtMin: 0,
    runtimeMin: 0,
    runtimeMax: 300,
    yearMin: 1970,
    yearMax: 2026
  });

  // Streaming platforms
  const platforms = [
    { id: 'netflix', name: 'Netflix', color: '#E50914' },
    { id: 'hulu', name: 'Hulu', color: '#1CE783' },
    { id: 'disney', name: 'Disney+', color: '#113CCF' },
    { id: 'hbo', name: 'HBO Max', color: '#9D34DA' },
    { id: 'prime', name: 'Prime Video', color: '#00A8E1' },
    { id: 'apple', name: 'Apple TV+', color: '#000000' },
    { id: 'paramount', name: 'Paramount+', color: '#0064FF' },
    { id: 'peacock', name: 'Peacock', color: '#000000' }
  ];

  // Sample movie data for profile building
  const sampleMovies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
      genre: ["Drama"],
      imdb: 9.3,
      rt: 91,
      runtime: 142,
      rating: "R",
      platform: "netflix"
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop",
      genre: ["Sci-Fi", "Action"],
      imdb: 8.8,
      rt: 87,
      runtime: 148,
      rating: "PG-13",
      platform: "hbo"
    },
    {
      id: 3,
      title: "Parasite",
      year: 2019,
      poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
      genre: ["Thriller", "Drama"],
      imdb: 8.6,
      rt: 99,
      runtime: 132,
      rating: "R",
      platform: "hulu"
    },
    {
      id: 4,
      title: "The Grand Budapest Hotel",
      year: 2014,
      poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
      genre: ["Comedy", "Drama"],
      imdb: 8.1,
      rt: 92,
      runtime: 99,
      rating: "R",
      platform: "disney"
    },
    {
      id: 5,
      title: "Dune",
      year: 2021,
      poster: "https://images.unsplash.com/photo-1574267432644-f65b5f8099e4?w=400&h=600&fit=crop",
      genre: ["Sci-Fi", "Adventure"],
      imdb: 8.0,
      rt: 83,
      runtime: 155,
      rating: "PG-13",
      platform: "hbo"
    }
  ];

  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Thriller"];
  const contentRatings = ["G", "PG", "PG-13", "R", "NC-17", "TV-MA"];

  const handlePlatformToggle = (platformId) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  const handleMovieRating = (rating) => {
    const currentMovie = sampleMovies[currentMovieIndex];
    
    setUserPreferences(prev => ({
      ...prev,
      [rating]: [...prev[rating], currentMovie.id]
    }));

    if (currentMovieIndex < sampleMovies.length - 1) {
      setCurrentMovieIndex(prev => prev + 1);
    } else {
      setCurrentView('discovery');
    }
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.find(m => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const toggleFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  // ONBOARDING VIEW
  if (currentView === 'onboarding') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,0,150,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,150,255,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }} />

        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          position: 'relative',
          zIndex: 1
        }}>
          <Film size={80} color="#FF0080" style={{ marginBottom: '30px' }} />
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 50%, #0096FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontFamily: '"Poppins", sans-serif',
            letterSpacing: '-2px'
          }}>
            CineMatch
          </h1>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '50px',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 300,
            lineHeight: '1.6'
          }}>
            Build your perfect watch profile. Discover movies you'll love.
          </p>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '18px',
              color: '#FFF',
              marginBottom: '20px',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Select Your Streaming Services
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginBottom: '40px'
            }}>
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformToggle(platform.id)}
                  style={{
                    padding: '16px',
                    background: selectedPlatforms.includes(platform.id)
                      ? `linear-gradient(135deg, ${platform.color}DD 0%, ${platform.color}99 100%)`
                      : 'rgba(255,255,255,0.05)',
                    border: selectedPlatforms.includes(platform.id)
                      ? `2px solid ${platform.color}`
                      : '2px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    color: '#FFF',
                    cursor: 'pointer',
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {selectedPlatforms.includes(platform.id) && <Check size={18} />}
                  {platform.name}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => selectedPlatforms.length > 0 && setCurrentView('profile-builder')}
            disabled={selectedPlatforms.length === 0}
            style={{
              padding: '18px 50px',
              background: selectedPlatforms.length > 0
                ? 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)'
                : 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50px',
              color: '#FFF',
              fontSize: '18px',
              fontWeight: 700,
              cursor: selectedPlatforms.length > 0 ? 'pointer' : 'not-allowed',
              fontFamily: '"Poppins", sans-serif',
              boxShadow: selectedPlatforms.length > 0
                ? '0 10px 40px rgba(255,0,128,0.4)'
                : 'none',
              transition: 'all 0.3s ease',
              opacity: selectedPlatforms.length > 0 ? 1 : 0.5
            }}
          >
            Build My Profile →
          </button>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(20px); }
          }
        `}</style>
      </div>
    );
  }

  // PROFILE BUILDER VIEW
  if (currentView === 'profile-builder') {
    const currentMovie = sampleMovies[currentMovieIndex];

    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)',
        padding: '20px',
        fontFamily: '"Poppins", sans-serif'
      }}>
        {/* Progress bar */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 30px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '10px',
          height: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${((currentMovieIndex + 1) / sampleMovies.length) * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FF0080 0%, #7928CA 100%)',
            transition: 'width 0.3s ease'
          }} />
        </div>

        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '24px',
            color: '#FFF',
            marginBottom: '10px',
            fontWeight: 700
          }}>
            Build Your Taste Profile
          </h2>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '30px'
          }}>
            {currentMovieIndex + 1} of {sampleMovies.length}
          </p>

          {/* Movie Card */}
          <div style={{
            position: 'relative',
            marginBottom: '40px',
            animation: 'slideIn 0.5s ease-out'
          }}>
            <div style={{
              background: `url(${currentMovie.poster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}>
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '30px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                color: '#FFF'
              }}>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  {currentMovie.title}
                </h3>
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.8)',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <span>{currentMovie.year}</span>
                  <span>•</span>
                  <span>{currentMovie.genre.join(', ')}</span>
                  <span>•</span>
                  <span><Star size={14} style={{ verticalAlign: 'middle' }} /> {currentMovie.imdb}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => handleMovieRating('disliked')}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.borderColor = '#FF4444';
                e.currentTarget.style.background = 'rgba(255,68,68,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              <X size={32} color="#FF4444" />
            </button>

            <button
              onClick={() => handleMovieRating('liked')}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.borderColor = '#00D9FF';
                e.currentTarget.style.background = 'rgba(0,217,255,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              <Heart size={32} color="#00D9FF" />
            </button>

            <button
              onClick={() => handleMovieRating('loved')}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.borderColor = '#FF0080';
                e.currentTarget.style.background = 'rgba(255,0,128,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              <Flame size={32} color="#FF0080" />
            </button>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <span>Dislike</span>
            <span>Like</span>
            <span>Love</span>
          </div>
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }

  // DISCOVERY VIEW
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)',
      fontFamily: '"Poppins", sans-serif'
    }}>
      {/* Header */}
      <header style={{
        padding: '20px',
        background: 'rgba(15,12,41,0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            CineMatch
          </h1>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              padding: '12px 24px',
              background: showFilters 
                ? 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)'
                : 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '25px',
              color: '#FFF',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>
      </header>

      {/* Filters Panel */}
      {showFilters && (
        <div style={{
          background: 'rgba(15,12,41,0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '30px 20px',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Genres */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '15px',
                fontWeight: 600
              }}>
                Genres
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {genres.map(genre => (
                  <button
                    key={genre}
                    onClick={() => toggleFilter('genres', genre)}
                    style={{
                      padding: '8px 16px',
                      background: filters.genres.includes(genre)
                        ? 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)'
                        : 'rgba(255,255,255,0.05)',
                      border: filters.genres.includes(genre)
                        ? '1px solid #FF0080'
                        : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '20px',
                      color: '#FFF',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontWeight: filters.genres.includes(genre) ? 600 : 400
                    }}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Rating */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '15px',
                fontWeight: 600
              }}>
                Content Rating
              </h3>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {contentRatings.map(rating => (
                  <button
                    key={rating}
                    onClick={() => toggleFilter('contentRating', rating)}
                    style={{
                      padding: '8px 16px',
                      background: filters.contentRating.includes(rating)
                        ? 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)'
                        : 'rgba(255,255,255,0.05)',
                      border: filters.contentRating.includes(rating)
                        ? '1px solid #FF0080'
                        : '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '20px',
                      color: '#FFF',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontWeight: filters.contentRating.includes(rating) ? 600 : 400
                    }}
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px'
            }}>
              {/* IMDb Score */}
              <div>
                <label style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '10px',
                  display: 'block',
                  fontWeight: 600
                }}>
                  Min IMDb: {filters.imdbMin.toFixed(1)}
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={filters.imdbMin}
                  onChange={(e) => setFilters({...filters, imdbMin: parseFloat(e.target.value)})}
                  style={{
                    width: '100%',
                    accentColor: '#FF0080'
                  }}
                />
              </div>

              {/* RT Score */}
              <div>
                <label style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '10px',
                  display: 'block',
                  fontWeight: 600
                }}>
                  Min RT: {filters.rtMin}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.rtMin}
                  onChange={(e) => setFilters({...filters, rtMin: parseInt(e.target.value)})}
                  style={{
                    width: '100%',
                    accentColor: '#FF0080'
                  }}
                />
              </div>

              {/* Year Range */}
              <div>
                <label style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '10px',
                  display: 'block',
                  fontWeight: 600
                }}>
                  Year: {filters.yearMin} - {filters.yearMax}
                </label>
                <input
                  type="range"
                  min="1970"
                  max="2026"
                  value={filters.yearMin}
                  onChange={(e) => setFilters({...filters, yearMin: parseInt(e.target.value)})}
                  style={{
                    width: '100%',
                    accentColor: '#FF0080'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Movie Grid */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '30px 20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '28px',
            color: '#FFF',
            fontWeight: 700,
            margin: 0
          }}>
            Recommended For You
          </h2>
          <div style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '14px'
          }}>
            <TrendingUp size={18} />
            <span>{sampleMovies.length} matches</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '20px'
        }}>
          {sampleMovies.map((movie, index) => (
            <div
              key={movie.id}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                background: `url(${movie.poster})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                aspectRatio: '2/3',
                position: 'relative'
              }}>
                {/* Hover overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '15px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = 1;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = 0;
                }}
                >
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '10px'
                  }}>
                    <div style={{
                      background: 'rgba(255,0,128,0.9)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Star size={12} fill="#FFF" />
                      {movie.imdb}
                    </div>
                    <div style={{
                      background: 'rgba(0,150,255,0.9)',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600
                    }}>
                      {movie.rt}%
                    </div>
                  </div>
                  
                  <button
                    onClick={() => addToWatchlist(movie)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      background: watchlist.find(m => m.id === movie.id)
                        ? 'rgba(0,217,255,0.2)'
                        : 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '8px',
                      color: watchlist.find(m => m.id === movie.id) ? '#00D9FF' : '#0F0C29',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {watchlist.find(m => m.id === movie.id) ? (
                      <>
                        <Check size={14} />
                        In Watchlist
                      </>
                    ) : (
                      <>
                        <Plus size={14} />
                        Add to List
                      </>
                    )}
                  </button>
                </div>

                {/* Platform badge */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: platforms.find(p => p.id === movie.platform)?.color || '#000',
                  color: '#FFF',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}>
                  {platforms.find(p => p.id === movie.platform)?.name || ''}
                </div>
              </div>
              
              <div style={{
                padding: '12px',
                background: 'rgba(15,12,41,0.9)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFF',
                  marginBottom: '6px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {movie.title}
                </h3>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.6)',
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center'
                }}>
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.runtime}m</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Watchlist Button */}
        {watchlist.length > 0 && (
          <div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 200
          }}>
            <button
              style={{
                padding: '16px 28px',
                background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)',
                border: 'none',
                borderRadius: '50px',
                color: '#FFF',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 10px 40px rgba(255,0,128,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(255,0,128,0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(255,0,128,0.5)';
              }}
            >
              <Play size={20} />
              Watchlist ({watchlist.length})
            </button>
          </div>
        )}
      </main>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
