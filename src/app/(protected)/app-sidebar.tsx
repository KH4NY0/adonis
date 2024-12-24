'use client'

import { Bot, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "~/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "~/components/ui/sidebar"
import { cn } from "~/lib/utils"

const items = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard
    },
    {
        title: 'Q&A',
        url: '/qa',
        icon: Bot
    },
    {
        title: 'Meetings',
        url: '/meetings',
        icon: Presentation
    },
    {
        title: 'Billing',
        url: '/billing',
        icon: CreditCard
    },
]

const projects = [
    {
        title: 'Project 1',
    },
    {
        title: 'Project 2',
    },
    {
        title: 'Project 3',
    },
]


export function AppSidebar() {
    const pathname  = usePathname()
    const { open } = useSidebar()

    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <div className="flex items-center gap-2">
                     <Image 
                        src='/logo.svg'
                        alt='logo'
                        width={40}
                        height={40}
                     />
                     {open && (
                         <Image 
                         src='text.svg'
                         alt='text'
                         width={100}
                         height={40}
                      />
                     )}
                    
                </div>
            </SidebarHeader>
            <SidebarContent>
                
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map(item => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link 
                                        href={item.url}
                                        className={cn({
                                            '!bg-primary !text-white': pathname === item.url
                                        }, 'list-none')}
                                    >
                                        <item.icon />
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


                <SidebarGroup>
                    <SidebarGroupLabel>
                        Your Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                    
                                {projects.map(project => {
                                    return (
                                        <SidebarMenuItem key={project.title}>
                                            <SidebarMenuButton asChild>
                                                <div>
                                                    <div className={cn(
                                                        'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',
                                                        {
                                                            'bg-primary text-white': true
                                                        }
                                                    )}>
                                                        {project.title[0]}
                                                    </div>
                                                    <span>
                                                        {project.title}
                                                    </span>
                                                </div>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                })}
                            <div className="h-2"></div>
                            <SidebarMenuItem>
                                <Link href='/create'>
                                    <Button variant={"outline"}>
                                        <Plus />
                                        Create Project
                                    </Button>
                                </Link>
                            </SidebarMenuItem>
                       
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
        </Sidebar>
    )
}