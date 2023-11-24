/*
  Warnings:

  - Added the required column `order` to the `Field` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Field` ADD COLUMN `order` INTEGER NOT NULL;
