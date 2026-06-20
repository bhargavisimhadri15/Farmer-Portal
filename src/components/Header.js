import React, { useState, useEffect } from 'react';

import {
  Menu,
  Search,
  Bell,
  Globe,
  Sun,
  Moon
} from 'lucide-react';

import './Header.css';

export default function Header({

  setSidebarOpen,

  sidebarOpen

}) {

  const [darkMode,setDarkMode]=useState(false);

  const [language,setLanguage]=useState('English');

  const [notifications,setNotifications]=useState(3);

  const [search,setSearch]=useState('');

  useEffect(()=>{

    if(darkMode){

      document.body.classList.add('dark-mode');

    }

    else{

      document.body.classList.remove('dark-mode');

    }

  },[darkMode]);

  function handleSearch(e){

    if(e.key !== 'Enter') return;

    if(!search.trim()) return;

    alert(`Searching : ${search}`);

  }

  function changeLanguage(){

    setLanguage(

      language === 'English'

      ? 'తెలుగు'

      : 'English'

    );

  }

  function clearNotifications(){

    setNotifications(0);

  }

  return (

    <header className='header'>

      <div className='header-left'>

        <button

          className='menu-btn'

          onClick={()=>

            setSidebarOpen(

              p=>!p

            )

          }

        >

          <Menu size={20} />

        </button>

        <div className='search-bar'>

          <Search

            size={15}

            className='search-icon'

          />

          <input

            type='text'

            placeholder='Search crop, weather, scheme...'

            value={search}

            onChange={(e)=>

              setSearch(

                e.target.value

              )

            }

            onKeyDown={handleSearch}

          />

        </div>

      </div>

      <div className='header-right'>

        <div

          className='notif-btn'

          onClick={clearNotifications}

        >

          <Bell size={19} />

          {

            notifications > 0 && (

            <span className='badge'>

              {notifications}

            </span>

          )}

        </div>

        <div

          className='lang-btn'

          onClick={changeLanguage}

        >

          <Globe size={16} />

          <span>

            {language}

          </span>

          <span className='chevron'>

            ▾

          </span>

        </div>

        <div className='theme-toggle'>

          <button

            className={`theme-opt ${

              !darkMode

              ? 'active'

              : ''

            }`}

            onClick={()=>

              setDarkMode(

                false

              )

            }

          >

            <Sun size={14} />

          </button>

          <button

            className={`theme-opt ${

              darkMode

              ? 'active'

              : ''

            }`}

            onClick={()=>

              setDarkMode(

                true

              )

            }

          >

            <Moon size={14} />

          </button>

        </div>

        <div className='user-profile'>

          <div className='user-avatar'>

            <span>

              F

            </span>

          </div>

          <div className='user-info'>

            <span className='user-name'>

              Farmer

            </span>

            <span className='user-loc'>

              West Godavari

            </span>

          </div>

        </div>

      </div>

    </header>

  );

}