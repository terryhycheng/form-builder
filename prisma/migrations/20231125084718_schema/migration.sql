-- DropForeignKey
ALTER TABLE `Field` DROP FOREIGN KEY `Field_formId_fkey`;

-- AddForeignKey
ALTER TABLE `Field` ADD CONSTRAINT `Field_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `Form`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
