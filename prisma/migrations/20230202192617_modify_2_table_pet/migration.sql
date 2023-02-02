/*
  Warnings:

  - Made the column `age` on table `Pet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `Pet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ownerId` on table `Pet` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "breed" TEXT,
    "age" INTEGER NOT NULL,
    "numberChip" TEXT,
    "category" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pet" ("age", "breed", "category", "id", "name", "numberChip", "ownerId") SELECT "age", "breed", "category", "id", "name", "numberChip", "ownerId" FROM "Pet";
DROP TABLE "Pet";
ALTER TABLE "new_Pet" RENAME TO "Pet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
