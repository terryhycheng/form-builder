/*
  Warnings:

  - A unique constraint covering the columns `[shareURL]` on the table `Form` will be added. If there are existing duplicate values, this will fail.
  - The required column `shareURL` was added to the `Form` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Form` ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `shareURL` VARCHAR(191) NOT NULL,
    ADD COLUMN `submissions` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    ADD COLUMN `visits` INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `Form_shareURL_key` ON `Form`(`shareURL`);
