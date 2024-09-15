"use client"
import React from "react";

const Hero = () => {
    return (
        <section className="relative bg-secondary text-text-light py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-50"></div>
            <div className="absolute inset-0" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}></div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-5xl md:text-6xl font-sans font-bold mb-6 text-center">
                    NoCapEd - f(s,q)=K+
                </h1>
                <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed">
                    NoCapEd's educational philosophy and formula f(s,q)=K+ represent
                    the learning process (f) through
                    <span className="font-semibold text-accent"> Stories (s)</span> that engage and inform, complemented by
                    <span className="font-semibold text-accent"> Questions (q)</span> that challenge and clarify,
                    to promote continuous <span className="font-semibold text-accent">knowledge growth (K+)</span>.
                </p>
                <div className="mt-10 flex justify-center">
                    <button className="btn-primary">
                        Start Learning
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;