import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xqaylpql");
    if (state.succeeded) {
        return (
            <div>
                <h2>Thanks for reaching out!</h2>
                <p>I will get back to you as soon as I can.</p>
            </div>
        )
    }
    return (
        <div className="flex items-center justify-center w-full">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly gap-4 rounded-lg w-[40rem] p-4 m-4" autoComplete="on">
                <section className="flex flex-row w-[33rem] justify-between">
                    <div className="flex flex-col p-2 m-2 rounded-lg">
                        <label htmlFor="name" className="text-xl">
                            Name
                        </label>
                        <input
                            required
                            id="name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="John Doe"
                            className="w-full rounded-md px-3.5 py-2 outline-1 -outline-offset-1 outline-gray-600 dark:outline-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex flex-col p-2 m-2 rounded-lg">
                        <label htmlFor="company" className="text-xl">
                            Company
                        </label>
                        <input
                            id="company"
                            type="text"
                            name="company"
                            placeholder="Business Corp."
                            className="w-full rounded-md px-3.5 py-2 outline-1 -outline-offset-1 outline-gray-600 dark:outline-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        />
                        <ValidationError
                            prefix="Company"
                            field="company"
                            errors={state.errors}
                        />
                    </div>
                </section>
                <section className="flex flex-row w-[33rem] justify-between">
                    <div className="flex flex-col p-2 m-2">
                        <label htmlFor="phone" className="text-xl">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            placeholder="+1 123-456-7890"
                            className="w-full rounded-md px-3.5 py-2 outline-1 -outline-offset-1 outline-gray-600 dark:outline-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        />
                        <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex flex-col p-2 m-2 rounded-lg">
                        <label htmlFor="email" className="text-xl">
                            Email
                        </label>
                        <input
                            required
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="example@email.com"
                            className="w-full rounded-md px-3.5 py-2 outline-1 -outline-offset-1 outline-gray-600 dark:outline-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                </section>
                <section className="flex flex-col p-2 rounded-lg w-[32rem] h-48">
                    <label htmlFor="message" className="text-xl">
                        Message
                    </label>
                    <textarea
                        required
                        id="message"
                        name="message"
                        className="w-full h-full rounded-md px-3.5 py-2 outline-1 -outline-offset-1 outline-gray-600 dark:outline-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </section>
                <button 
                    type="submit"
                    className="w-[31.25rem] bg-[var(--tertiary-accent)] text-xl py-2 rounded-md hover:bg-[var(--secondary-accent)] hover:cursor-pointer"
                    disabled={state.submitting}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}