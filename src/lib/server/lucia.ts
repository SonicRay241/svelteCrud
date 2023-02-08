import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { prisma } from '$lib/server/prisma';

export const auth = lucia({
    adapter: prismaAdapter(prisma),
    env: dev ? "DEV" : "PROD",
    transformUserData: (userdata) => {
        return {
            userId: userdata.id,
            username: userdata.username,
            name: userdata.name
        }
    }
})

export type Auth = typeof auth