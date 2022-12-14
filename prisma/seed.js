const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        nick: 'Wojteq',
        password: 'haslo123',
        email: 'wojtekkowalczyk@prisma.io',
      },
      {
        nick: 'ŁukaszII',
        password: 'haslo123',
        email: 'lukaspodolski@prisma.io',
      },
      {
        nick: 'anteqkois',
        password: 'haslo123',
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
