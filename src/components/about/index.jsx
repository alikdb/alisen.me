'use client'
import Section from "@/components/section";
import {useState, useEffect} from "react";
import Link from "next/link"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Image from "next/image";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Istanbul');

const AboutComponent = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs().format('HH:mm:ss'));
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <Section>
            <div className="container max-w-4xl mx-auto px-6">
                <div className="flex text-sm lowercase opacity-60">
                    <time className="block w-[62px] whitespace-nowrap">
                        {time}
                    </time>
                    <div className="flex gap-1.5">
                        <span>·</span>
                        <Link href="/" target="_blank">
                            Antalya, Turkey
                        </Link>
                    </div>
                </div>

                <div className="flex justify-between gap-8">
                    <div>
                        <h1 className="flex gap-2 pb-4 text-2xl">
                            <span className="font-bold">Hey, I`m Ali</span>
                            <span className="inline-block origin-[70%_70%] animate-wave">👋🏼</span>
                        </h1>
                        <div className="grid gap-4">
                            <div className="sm:max-w-md">
                                I`m a Front End Engineer based in Barcelona. I <Link
                                href="https://github.com/alikdb" className="underline-offset-2 underline"
                                target="_blank">code</Link>, <Link
                                href="/writing" className="underline-offset-2 underline"
                                target="_blank">write</Link> and build stuff on internet.
                            </div>
                            <p className="sm:max-w-md">I love working in-between product, engineering and developer
                                experience, currently at <Link target="_blank" href="https://bulutsoft.com.tr"
                                                               className="underline-offset-2 underline"
                                                               rel="noopener noreferrer">Bulutsoft</Link>.</p>
                        </div>
                    </div>
                    <Image height="176" width="176" loading="lazy"
                           className="hidden h-44 w-44 transform-gpu rounded-full sm:block" src="/me.jpeg" alt="me"/>
                </div>
            </div>
        </Section>
    )
}
export default AboutComponent