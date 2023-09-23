-- CreateTable
CREATE TABLE `tab_session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `session_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `report` VARCHAR(191) NOT NULL,
    `session_type` VARCHAR(191) NOT NULL,
    `facebook_link` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tab_session_report_key`(`report`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tab_agreement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `agreement_topic` VARCHAR(191) NOT NULL,
    `asigned_to` VARCHAR(191) NOT NULL,
    `deadline` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `session_id` INTEGER NOT NULL,
    `agreement_state` VARCHAR(191) NOT NULL,
    `agreement_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tab_agreement_agreement_id_key`(`agreement_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tab_agreement` ADD CONSTRAINT `tab_agreement_session_id_fkey` FOREIGN KEY (`session_id`) REFERENCES `tab_session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
