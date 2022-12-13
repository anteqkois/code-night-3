const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Wojtek',
        email: 'wojtekkowalczyk@prisma.io',
      },
      {
        name: 'ŁukaszII',
        email: 'lukaspodolski@prisma.io',
      },
      {
        name: 'Antek',
        email: 'anteqkois@prisma.io',
      },
    ],
  });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
