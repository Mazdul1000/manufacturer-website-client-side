import React from 'react';
import blogSS1 from '../../assets/image/blog-ss 1.png'
import blogSS2 from '../../assets/image/blog-ss 2.png'
const Blogs = () => {
    return (
        <div className='min-h-screen px-12'>
            <h1 className='text-4xl font-bold text-center text-primary mt-3'> Our Blogs</h1>
            <div className='grid grid-cols-1 my-10 gap-10'>
                <div className='bg-base-200 p-5 rounded-xl shadow-lg'>
                    <h1 className='text-3xl font-bold'>How will you improve the performance of a React Application?</h1>
                    <p className='text-[22px] pl-5 mt-3 font-serif'><span className='text-2xl font-bold text-primary'>Answer:</span>
                        How to improve react application performance?

                        React application is build fast and reliable but to make it more better for performance , we can work do some extra work. Because the more the app grow, the more harder will it be to optimized.We can look up to something to improve performance of react application. <br />

                        <span className='text-xl font-semibold block mt-5'>Code splitting with react.lazy and suspense</span>

                        Large react app usually consist many components, utility methods , and third-party libraries. When a user browse, a large bundle of javascript will be shipped to the users as soon as he load the first page.This affect page performance significantly.

                        The problem with shipping a large javascript  payload consume more time so it will take more time for loading the page, espcially when user will browse with weaker devices and network connections. This is why code splitting and lazy laoding extremely useful.We can use lazy loading with Ract.lazy with suspense component.


                        <span className='text-xl font-semibold block mt-5'>Render large list with react-window.</span>

                        Large tables and lists can slow down our app performance. Loading every single item on those table or list affect our app performance significantly. Proper method of visualization can solve this problem. react-window is a library that allow large lists to be rendered effciently.

                        <span className='text-xl font-semibold block mt-5'> Keeping component state local where necessary.</span>

                        We know that state update on a parent componenet re-renders the component and its child components. we can extract the part of code that cares about the component state and make it local to that part of code. It will make re-rendering a component only when necessary.

                        <span className='text-xl font-semibold block mt-5'>Memoizing Components to resist unnecessary re-rendering:</span>

                        Memoization is an optimizaition technique that caches a component rendering operation and save the result in memory and returns the cached result for the same input. As a result , if a component receives a prop, a memoized component compares the prop by default and skips re-rendering the child component if the prop has not changed.


                        <span className='text-xl font-semibold block mt-5'>Image lazy loading:</span>

                        Nowadays All web application contain images. We can optimize an application by avoid loading all the images at once. We can make the app wait untill each of the images is about to appear in the viewport before we render then in the DOM. This will improve the load time and app performance.
                    </p>
                </div>
                <div className='bg-base-200 p-5 rounded-xl shadow-lg'>
                    <h1 className='text-3xl font-bold'>What are the different ways to manage a state in a React application?</h1>
                    <p className='text-[22px] pl-5 mt-3 font-serif'><span className='text-2xl font-bold text-primary'>Answer:</span>
                        State management in React application is an inevitable part. Though there are several ways to manage state, below I am mentioning type of state management those are most popular. <br />
                    </p>

                    <ul className='list-disc text-[22px] font-serif pl-10'>
                        <li className='my-4'><p><span>Local state:</span> Local state is the data that is managed in one or another component. We most often manage local state in React using useState hook.</p></li>

                        <li className='my-4'><p><span>Global State:</span> Global state is the data that is manage across multiple components. Global state is needed when we want to get and update data anywhere. For example, authenticated user sate is a global state. If user is logged into our app, it is necessary to change data across the application.</p></li>

                        <li className='my-4'><p><span>Server state:</span> Server state data comes from an external server and need to be integrated with our UI state. There are some state the need to be managed every time we fetch or update from an external server. Managing server state is a bit hard but fortunately we have tools like React Query that make managing server state much easier.</p></li>

                        <li className='my-4'><p><span>URL state:</span> URL state is the data that is exists in our URLs. This inculdes pathname and query parameters. We can use URL state storing data like pagination offset limit, the id of the current item on a product management site, sorting data.</p></li>
                    </ul>
                </div>

                <div className='bg-base-200 p-5 rounded-xl shadow-lg'>
                    <h1 className='text-3xl font-bold'>How does prototypical inheritance work?</h1>
                    <p className='text-[22px] pl-5 mt-3 font-serif'><span className='text-2xl font-bold text-primary'>Answer:</span>
                        Prototypal inheritance is a method by which a object can inherit properties and method of another object. It uses the concept of prototype chaining. When a constructor function creates a object, it do not create object based on constructor's prototype. Rather is create object linked to the constructors prototype object. All the objects in javascript  inherit properties and methods from their prototype.An object use the properties or methods of another object via the prototype linkage. <br />

                        When we attepmt to acces a property or method of a object, Javascript at first search on the object itself .Then if that is not found, jvascript search the object's prototype. If still no match is found, Javascript checks the prototype of the linked object and continue searching until the end of the prototype chain. The last thing in the prototype chain is Object.prototype. Where all the objects and properties inherited. That means all the javascript objects has a hidden, internal [[Prototype]] property which exposed through __proto__ on some browser and objects can be extended and inherit the properties and methods on [[Prototype]] of their constructor. These prototypes can be chained and each object will inherit everything throughout the chain. Chain ends in the Object.prototype.
                    </p>
                </div>


                <div className='bg-base-200 p-5 rounded-xl shadow-lg'>
                    <h1 className='text-3xl font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className='text-[22px] pl-5 mt-3 font-serif'><span className='text-2xl font-bold text-primary'>Answer:</span>
                        If we have an array of objects(products) , we can find an object from them by searching any key value . We can do this by array.find()  method. For example, We have an array  we can find any object of the array by this method:
                        <img className='px-12 rounded-xl my-5' src={blogSS2} alt="" />
                        This is how we can find an object from an array of objects by name or any other key value.This method will return the first matched object from an array. <br />

                        On the other hand, if we want to find all the matched object by searching a key value, we can use array.filter() method. For example,
                        <img className='px-12 rounded-xl my-5' src={blogSS1} alt="" />
                    </p>
                </div>

                <div className='bg-base-200 p-5 rounded-xl shadow-lg'>
                    <h1 className='text-3xl font-bold'>What is a unit test? Why should write unit tests?</h1>
                    <p className='text-[22px] pl-5 mt-3 font-serif'><span className='text-2xl font-bold text-primary'>Answer:</span>
                        In the application development process , there are situations when system does not work for the existence of a little bug. In order to not wasting time , on fixing such erros, developers use unit testing process. They check the source code by each piece immediately after writing it. It is a process of that helps us checking each unit of code weather it is usable or not.</p>

                    <h3 className='text-2xl font-semibold'>We should use unit testing process because there are several advantages.</h3>

                    <ul className='list-disc text-[22px] font-serif pl-10'>
                        <li className='my-3'>It improves our quatility of code.</li>
                        <li className='my-3'>We can fing errors and bugs easily.</li>
                        <li className='my-3'>Refactoring or updating the code  or system library becomes much easier when we test each component of the software individually.</li>
                        <li className='my-3'>We can get the documentation of the whole system. So that when other person wants to learn about the system or certain program, they can easily understand.</li>
                        <li className='my-3'>The debugging process becomes much more easier for unit testing.</li>
                        <li className='my-3'>Reduce time wasting. When bugs or errors are detected in the early stage through unit testing, it became much easier to solve rather find them in the last stage.</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Blogs;