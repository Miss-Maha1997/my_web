/* eslint-disable tailwindcss/no-custom-classname */
// import { getTimestamp } from '@/lib/utils';
// import Link from 'next/link';
import React from 'react'
// import RenderTag from '../RenderTag';
// import Metric from '../Metric';
import Image from 'next/image';
import Link from 'next/link';

interface TampletProps{
    _id: string;
    title: string;
    imgURL: string;
    price: number;
    categorty?: string;
}

const TampletCard = ({
    _id,
    title,
    imgURL,
    price,
    categorty,
}: TampletProps) => {
  return (
    <Link href={`/tamplete/${_id}`}>
        <div className="card-wrapper group h-full overflow-hidden rounded-lg border p-9 transition hover:shadow-sm">
            <div className="sm:h3-semibold
                base-semibold text-dark200_light900 line-clamp-2 group-hover:text-primary-500 md:text-base">
                    {title}
                </div>
            <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-md">
                
                <Image 
                    fill
                    src={imgURL}
                    alt={title}
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col pt-2">
                <p className="text-muted-foreground text-xs">
                    {categorty}
                </p>
                <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                    <div className="flex items-center gap-x-1 text-primary-500">
                        <p className="text-md font-medium text-primary-500 md:text-sm">
                            {price}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    </Link>
    
  )
}










/* 
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
        <div className="flex flex-col-reverse items-start justify-between
        gap-5 sm:flex-col">
            <div>
                <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
                    {getTimestamp(createdAt)}
                </span>
                <Link href={`/tamplete/${_id}`}>
                    <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
                        {title}
                    </h3>
                </Link>
            </div>
            {/* If signed in add edit delete actions */
      /*   </div>

        <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
                <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
            ))}             
        </div>

        <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
                imgUrl="/assets/icons/avatar.svg"
                alt="user"
                value={designer.name}
                title={` - asked ${getTimestamp(createdAt)}`}
                href={`/profile/${designer._id}`}
                textStyles="body-meduim text-dark400_light700"
            />
            
            <Metric
                imgUrl="/assets/icons/like.svg"
                alt="Upvotes"
                value={formatAndDivideNumber(upvotes)}
                title="Votes"
                textStyles="small-meduim text-dark400_light800"
            />
            
            <Metric
                imgUrl="/assets/icons/eye.svg"
                alt="eye"
                value={formatAndDivideNumber(views)}
                title="Views"
                textStyles="small-meduim text-dark400_light800"
            />


        </div>
      
    </div> */ 
  


export default TampletCard
