import React, {useEffect, useState} from "react";
import TutorialsPage from "./pages/TutorialsPage";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage";
import LoginPage from "./pages/LoginPage";
import TopicPage from "./pages/TopicPage";
import TopBar from "./components/TopBar";
import './index.css'
import RegisterPage from "./pages/RegisterPage";


const courses = [
    {
        topic: "Variables",
        description: "Python is completely object oriented\\n, and not \"statically typed\". You do not need to declare variables before using them, or declare their type. Every variable in Python is an object. This tutorial will go over a few basic types of variables.",
        syntax: {
            explanation: "апостроф (‘) немесе тырнақша (“) ретінде кез-келген таңбалар жолы ретінде жазылады. ",
            code:"print(\"lmaooo\")\\nok\\nlmaoo"
        },
        tutorials: [
            {
                name: "Numbers",
                description: "Description numbers",
                syntax: {
                    explanation: "апостроф (‘) немесе тырнақша (“) ретінде кез-келген таңбалар жолы ретінде жазылады. ",
                    code:"print(\"lmaooo\")\\nok\\nlmaoo"
                },
            },
            {
                name: "Strings",
                description: "Description string",
                syntax: {
                    explanation: "апостроф (‘) немесе тырнақша (“) ретінде кез-келген таңбалар жолы ретінде жазылады. ",
                    code:"print(\"lmaooo\")\\nok\\nlmaoo"
                },
            },
            {
                name: "Double",
                description: "Description double"
            }
        ]
    },
    {
        topic: "Operators",
        description: "This section explains how to use basic operators in Python.",
        tutorials: [
            {
                name: "Arithmetic Operators",
                description: "Description operators"
            },
            {
                name: "Using Operators with Strings",
                description: "Description stuff",
                syntax: {
                    explanation: "апостроф (‘) немесе тырнақша (“) ретінде кез-келген таңбалар жолы ретінде жазылады. ",
                    code:"print(\"lmaooo\")\\nok\\nlmaoo"
                },
            }
        ]
    },
    {
        topic: "Classes and Objects",
        description: "Objects are an encapsulation of variables and functions into a single entity. Objects get their variables and functions from classes. Classes are essentially a template to create your objects.",
        tutorials: [
            {
                name: "Accessing Object Variables",
                description: "Description stuff"
            },
            {
                name: "Accessing Object Functions",
                description: "Description stuff"
            }
        ]
    },
    {
        topic: "Variables",
        description: "Python is completely object oriented, and not \"statically typed\". You do not need to declare variables before using them, or declare their type. Every variable in Python is an object. This tutorial will go over a few basic types of variables.",
        tutorials: [
            {
                name: "Numbers",
                description: "Description numbers"
            },
            {
                name: "Strings",
                description: "Description string",
                syntax: {
                    explanation: "апостроф (‘) немесе тырнақша (“) ретінде кез-келген таңбалар жолы ретінде жазылады. ",
                    code:"print(\"lmaooo\")\\nok\\nlmaoo"
                },
            },
            {
                name: "Double",
                description: "Description double"
            }
        ]
    },
    {
        topic: "Operators",
        description: "This section explains how to use basic operators in Python.",
        tutorials: [
            {
                name: "Arithmetic Operators",
                description: "Description operators"
            },
            {
                name: "Using Operators with Strings",
                description: "Description stuff"
            }
        ]
    },
    {
        topic: "Classes and Objects",
        description: "Objects are an encapsulation of variables and functions into a single entity. Objects get their variables and functions from classes. Classes are essentially a template to create your objects.",
        tutorials: [
            {
                name: "Accessing Object Variables",
                description: "Description stuff"
            },
            {
                name: "Accessing Object Functions",
                description: "Description stuff",
                syntax: {
                    explanation: "апостроф (‘) немесе тырнақша (“) ретінде кез-келген таңбалар жолы ретінде жазылады. ",
                    code:"print(\"lmaooo\")\\nok\\nlmaoo"
                },
            }
        ]
    },
    {
        topic: "Variables",
        description: "Python is completely object oriented, and not \"statically typed\". You do not need to declare variables before using them, or declare their type. Every variable in Python is an object. This tutorial will go over a few basic types of variables.",
        tutorials: [
            {
                name: "Numbers",
                description: "Description numbers"
            },
            {
                name: "Strings",
                description: "Description string"
            },
            {
                name: "Double",
                description: "Description double"
            }
        ]
    },
    {
        topic: "Operators",
        description: "This section explains how to use basic operators in Python.",
        tutorials: [
            {
                name: "Arithmetic Operators",
                description: "Description operators"
            },
            {
                name: "Using Operators with Strings",
                description: "Description stuff"
            }
        ]
    },
    {
        topic: "Classes and Objects",
        description: "Objects are an encapsulation of variables and functions into a single entity. Objects get their variables and functions from classes. Classes are essentially a template to create your objects.",
        tutorials: [
            {
                name: "Accessing Object Variables",
                description: "Description stuff"
            },
            {
                name: "Accessing Object Functions",
                description: "Description stuff"
            }
        ]
    }
]

function App() {

    const location = useLocation();
    const [currentTopicIndex, setCurrentTopicIndex] = useState(0)
    const [isShowing, setIsShowing] = useState(true)


    return (
        <div>

            {
                location.pathname !== "/login" && location.pathname !== "/register" &&
                <div>

                    <TopBar currentPath={location.pathname} setIsShowing={setIsShowing} isShowing={isShowing}/>
                    <div style={{marginTop: "50px"}}/>
                </div>
            }

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/tutorials"
                       element={<TutorialsPage courses={courses} setCurrentTopicIndex={setCurrentTopicIndex}/>}/>
                <Route path="/topic" element={<TopicPage courses={courses} currentTopicIndex={currentTopicIndex}
                                                         setCurrentTopicIndex={setCurrentTopicIndex}
                                                         isShowing={isShowing} setIsShowing={setIsShowing}/>}/>
                <Route path="*" element={<NotfoundPage/>}/>
            </Routes>

        </div>
    )
}

export default App