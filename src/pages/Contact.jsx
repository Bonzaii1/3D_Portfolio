import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = () => {

    }

    const handleFocus = () => {

    }

    const handleBlur = () => {

    }
    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch!</h1>
                <form className='w-full flex flex-col gap-7 mt-14'>
                    <label className='text-black-500 font-semibold'>Name</label>
                    <input
                        type='text'
                        name='name'
                        className='input'
                        placeholder='John'
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />

                    <label className='text-black-500 font-semibold'>email</label>
                    <input
                        type='email'
                        name='email'
                        className='input'
                        placeholder='john@gmail.com'
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />

                    <label className='text-black-500 font-semibold'>Your Message</label>
                    <textarea
                        name='message'
                        className='input'
                        placeholder='Let me know how I can help!'
                        required
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur} />

                    <button
                        type="submit"
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact