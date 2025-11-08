import { Hero } from '@/components/sections/hero'
import { MyProjects } from '@/components/sections/projects/projectList'
import { TechStack } from '@/components/sections/techstack'

export default function Home() {
    return (
        <>
            <Hero />
            <main className='space-y-48'>
                <MyProjects />
                <TechStack />
            </main>
        </>
    )
}