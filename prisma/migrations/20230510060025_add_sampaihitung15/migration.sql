-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataResponden" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "universitas" TEXT NOT NULL,
    "prodi" TEXT NOT NULL,
    "negara" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "hitung1" DOUBLE PRECISION NOT NULL,
    "hitung2" DOUBLE PRECISION NOT NULL,
    "hitung3" DOUBLE PRECISION NOT NULL,
    "hitung4" DOUBLE PRECISION NOT NULL,
    "hitung5" DOUBLE PRECISION NOT NULL,
    "hitung6" DOUBLE PRECISION NOT NULL,
    "hitung7" DOUBLE PRECISION NOT NULL,
    "hitung8" DOUBLE PRECISION NOT NULL,
    "hitung9" DOUBLE PRECISION NOT NULL,
    "hitung10" DOUBLE PRECISION NOT NULL,
    "hitung11" DOUBLE PRECISION NOT NULL,
    "hitung12" DOUBLE PRECISION NOT NULL,
    "hitung13" DOUBLE PRECISION NOT NULL,
    "hitung14" DOUBLE PRECISION NOT NULL,
    "hitung15" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DataResponden_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
