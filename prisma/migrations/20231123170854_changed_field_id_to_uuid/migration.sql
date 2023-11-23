/*
  Warnings:

  - The primary key for the `Field` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Option` DROP FOREIGN KEY `Option_fieldId_fkey`;

-- AlterTable
ALTER TABLE `Field` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Option` MODIFY `fieldId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Option` ADD CONSTRAINT `Option_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `Field`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
