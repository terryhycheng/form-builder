-- DropForeignKey
ALTER TABLE `Option` DROP FOREIGN KEY `Option_fieldId_fkey`;

-- AddForeignKey
ALTER TABLE `Option` ADD CONSTRAINT `Option_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `Field`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
