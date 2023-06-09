import prisma from "../../utils/prisma.js";

export const getAll = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,

      product: {
        select: {
          id: true,
          name_product: true,
          price: true,
          quantity: true,
        },
      },
    },
  });
};

export const get = async (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,

      product: {
        select: {
          id: true,
          name_product: true,
          price: true,
          quantity: true,
        },
      },
    },
  });
};

export const create = async (user) => {
  const { name, email, phone } = user;
  return prisma.user.create({
    data: {
      name,
      email,
      phone: Number(phone),
    },
  });
};

export const update = async (id, user) => {
  const { name, email, phone } = user;
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      phone: Number(phone),
    },
  });
};

export const deleteUserById = async (id) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};
