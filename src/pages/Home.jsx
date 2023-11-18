import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-center items-center">
                    <Link to="/" className="text-white text-lg font-bold">Logo</Link>
                    <div className="flex-grow"></div>
                    <div>
                        <Link to="/" className="text-white mr-4">Home</Link>
                        <Link to="/aboutus" className="text-white mr-4">About</Link>
                        <Link to="/contactus" className="text-white">Contact</Link>
                    </div>
                </div>
            </nav>

            <div className='bg-black text-white h-screen flex justify-center items-center'>
                <div className='w-1/2'>
                    <h1 className="text-4xl font-bold mb-4">Hello</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
