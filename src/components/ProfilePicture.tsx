"use client";
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function ProfilePicture() {
  return (
    <Avatar className='h-32 w-32'>
        <AvatarImage
            src="https://gravatar.com/avatar/0ca0a192a783c2734db053f6539ccfade213ed93fd708a155fa67ceaa5092ec4?s=128"
            alt="Avatar"
            />
        <AvatarFallback>yo</AvatarFallback>
    </Avatar>
  )
}
