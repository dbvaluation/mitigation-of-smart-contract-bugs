async function main() {

    const Box = await ethers.getContractFactory('Box');
    console.log('Deploying Box...');
    const box = await Box.deploy();
    await box.deployed();
    console.log('Box deployed to: ', box.address);

    await box.store(23)

    const value = await box.retrieve()
    console.log(`Value is ${value.toString()}`)

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })