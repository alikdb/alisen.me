'use client'
import Section from "@/components/section";
import {useState, useEffect} from "react";
import Link from "next/link"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Istanbul');

const AboutComponent = () => {
    const [time, setTime] = useState(dayjs().format('HH:mm:ss'));
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
                    <time className="block whitespace-nowrap">
                        {time}
                    </time>
                    <div className="flex gap-1.5">
                        <span className="ml-1.5">·</span>
                        <Link href="/" target="_blank">
                            Antalya, Turkey
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default AboutComponent