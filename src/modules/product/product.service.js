import prisma from "../../utils/prisma.js";

export const getAll = async () => {
  return prisma.product.findMany({
    select: {
      id: true,
      name_product: true,
      quantity: true,
      price: true,

      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });
};

export const get = async (id) => {
  return prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name_product: true,
      quantity: true,
      price: true,

      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });
};

export const create = async (product) => {
  const { name_product, quantity, price, userId } = product;
  return prisma.product.create({
    data: {
      name_product,
      quantity: Number(quantity),
      price: Number(price),
      userId: Number(userId),
    },
    select: {
      id: true,
      name_product: true,
      quantity: true,
      price: true,

      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });
};

export const update = async (id, product) => {
  const { name_product, quantity, price } = product;
  return prisma.product.update({
    where: {
      id,
    },
    data: {
      name_product,
      quantity: Number(quantity),
      price: Number(price),
    },
    select: {
      id: true,
      name_product: true,
      quantity: true,
      price: true,

      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });
};

export const deleteProductById = async (id) => {
  return prisma.product.delete({
    where: {
      id,
    },
  });
};
