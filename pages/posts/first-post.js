import Link from 'next/Link';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';
const FirstPost=()=>{
    return (
        <Layout>
            <Head>
                <title>Hello world</title>
            </Head>
            <h2>First Post</h2>
            <Link href="/">Back to Home</Link>
            <Image 
                src="/images/flowers.jpg"
                height={100}
                width={100}
                alt="flowers"
            />
        </Layout>
    );
};
export default FirstPost;