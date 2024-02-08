"use client";

import NewsSection from "@/components/NewsSection";
import CarouselSection from '@/components/CarouselSection'; 
import Popular from "@/components/Popular";

import Image from "next/image";
import React from 'react';

const images = [
 'bball.jpeg', 'ronaldo7.jpeg', 'rugby.jpg'
]; 

export default function Home() {
	return (
		<main>
			<CarouselSection />
			<Popular></Popular>
			<NewsSection />
		</main>
	);
}
