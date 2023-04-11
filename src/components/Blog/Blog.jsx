import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>This is blog</h1>
            <div>
                <h2 className='text-3xl mt-5'>When should you use Context API? </h2>
                <p>Context API is a feature in React also a JavaScript library that builds user interfaces. It allows to manage and share state data in components without passing props down through multiple levels of the component. We can use Context API in Prop Drilling, while the current theme state also can manage global state.</p>
                <h2 className='text-3xl mt-5'>What is custom hook in react? </h2>
                <p>Custom hooks are created using regular JavaScript functions and can use other hooks such as useState, useEffect, useContext, and more. When we use loader we can get the data using custom hooks. It handles API requests, manages state and manages local storage.</p>
                <h2 className='text-3xl mt-5'>What is useRef & useMemo? Explain it</h2>
                <p>useRef is a hook that allows to create and maintain a mutable reference that persists across renders without causing the component to re-render. It returns a mutable object with a current property that can be used to store and access a value, which will persist across component renders.
                useMemo is a hook that allows to memoize the result of a computation and only recompute it when the dependencies change. It helps optimize performance by avoiding unnecessary computations in components that are expensive in terms of CPU or memory.
                </p>
            </div>
        </div>
    );
};

export default Blog;