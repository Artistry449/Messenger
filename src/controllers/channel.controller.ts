import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createChannel = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const createdChannel = await prisma.channel.create({
      data: {
        name: name,
      },
    });
    res.status(200).json({
      message: "Channel amjilttai uuslee",
      createdChannel,
    });
  } catch (error) {
    res.status(500).json({ message: "Channel vvsgehed aldaa garsan !!!" });
    console.log(error);
  }
};

export const getChannelById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const channel = await prisma.channel.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "success",
      channel,
    });
  } catch (error) {
    res.status(500).json({ message: "Channel tathad aldaa garlaa" });
  }
};

export const editChannel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const editedChannel = await prisma.channel.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
    res.status(200).json({ message: "success", editedChannel });
  } catch (error) {
    res.status(500).json({ message: "Channel zasahad aldaa garlaa" });
  }
};

export const deleteChannel = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedChannel = await prisma.channel.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "successfully deleted", deletedChannel });
  } catch (error) {
    res.status(500).json("Channel ustgahad aldaa garlaa");
  }
};
