
const readline = require('readline');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { isLibbsdInstalled, printInstallationInstructions, ensureTrailingSlash } = require('./check_libsd');
const { getParams } = require("./get_args")
const { update_git } = require("./update")
const { draw_done, draw_intro } = require('./ascii_drawing')
const { checkFiles } = require("./check_files")
const os = require('os');

//working directory
const currentDirectory = process.cwd();

const dirName = __dirname


let failed = false;
const args = getParams();
const reset = '\x1b[0m';
const bold = '\x1b[1m';
const blue = '\x1b[34m';
const yellow = '\x1b[33m';
const green = '\x1b[32m';
const red = '\x1b[31m'; // Red color
const cyan = '\x1b[36m';



if (args.update) {
    console.log(blue, "\rUpdating...")
    update_git((err) => process.exit(err));
}
else if (args.check) {
    console.log(blue, "\rChecking files...");
    checkFiles().then((err) => {
        if (!err) {
            console.log(green, '\r✅ All files exist', reset)
        }
    })
} else {
    begin();
}

async function begin() {
    draw_intro(yellow);
    const functionNames = [
        "ft_isalpha",
        "ft_isdigit",
        "ft_isalnum",
        "ft_isascii",
        "ft_isprint",
        "ft_strlen",
        "ft_memset",
        "ft_bzero",
        "ft_memcpy",
        "ft_memmove",
        "ft_strlcpy",
        "ft_strlcat",
        "ft_toupper",
        "ft_tolower",
        "ft_strchr",
        "ft_strrchr",
        "ft_strncmp",
        "ft_memchr",
        "ft_memcmp",
        "ft_strnstr",
        "ft_atoi",
        "ft_calloc",
        "ft_strdup",
        'ft_substr',
        'ft_itoa',
        'ft_split',
        'ft_striteri',
        'ft_strmapi',
        'ft_strtrim'
    ];




    // if (!fs.existsSync(srcPath)) {
    //     console.error(`Directory ${src_folder} does not exist.`);
    //     log_dir();
    //     process.exit(1);
    //   }
    // Array of file paths to check



    //update File to check
    // filesToCheck.forEach((fileName, index) => {
    //   filesToCheck[index] = src_folder + fileName;
    // })



    function checkFileExists(filePath) {
        return new Promise((resolve) => {
            fs.access(filePath, fs.constants.F_OK, (err) => {
                resolve(!err);
            });
        });
    }

    async function checkFilesExist(files) {
        let err = false;
        for (const file of files) {
            const absolutePath = path.resolve(file); // Resolve absolute path
            const exists = await checkFileExists(absolutePath);
            if (!exists) {
                console.error(`${file} ${exists ? 'exists' : 'is MISSING'}`);
                err = true;
            }
        }
        return err;
    }

    function log_libft(fld) {
        console.log(`${reset}

   │ ${cyan}
   └── (${fld})  
         ├──>${red} libfta.a ${cyan}     ↩ Add your libft.a here
         └──> ..
   

      `)
    }
    function log_dir() {
        console.log(`${reset}
    │
    ├── app.js
    ├── check_libsd.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── run.js
    ├── tests/
    │   └── ... (other test files)
    │ ${reset}
    ├── your-folder-name ${red}(${src_folder})${cyan} ↩ Add your folder here in the root directory ${reset}
    │   └── libft.a
    │${reset}
    └── ... (other files)
       `)
    }


    //check args
    if (!args.f) {
        console.log(yellow, `\r❌ Error: Invalid args!${reset}
    Try this  intsted
    Valid : testf -f ft_strlen  [ or any function name ]
    valid : testf -f all
    valid : testf -u  
    valid : testf -update
    valid : testf -check
    valid : testf -c
        `);
        process.exit(1);
    }
    //Check folder
    let src_folder = currentDirectory
    src_folder = ensureTrailingSlash(src_folder)
    const srcPath = src_folder
    if (!fs.existsSync(srcPath)) {
        console.error(`❌ Directory ${src_folder} does not exist.`);
        log_dir();
        process.exit(1);
    }

    const libftPath = src_folder + 'libft.a'

    checkFilesExist([libftPath]).then(err => {
        if (err) {
            log_libft(src_folder);
            process.exit(0);
        }
        if (!functionNames.includes(args.f) && args.f !== 'all') {
            console.error(`❌ No test available for  ${args.f} . make sure its correct`);
            process.exit(0);
        }
        const command = `gcc ${dirName}/tests/test_by_function.c ${__dirname}/tests/test_functions/libtest.a ${__dirname}/tests/libs/libmysd.a ` + libftPath + `  -fsanitize=address -o ${src_folder}testLaunch.out  `
        // const command = 'gcc ${dirName}/tests/test_by_function.c ${__dirname}/tests/test_functions/libtest.a ${__dirname}/tests/libs/libmysd.a ' + libftPath + ' -fsanitize=address -o ${__dirname}/testLaunch.out';
        start(command);
    })

    async function start(command) {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(red,"\r⚠️ Can't compile");
                if (error.message.includes("undefined reference to")) {
                    const regex = /undefined reference to [`'"]([^`'"]+)['"]/g;
                    let match;
                    const missingFunctions = [];
                    while ((match = regex.exec(stderr)) !== null) {
                        missingFunctions.push(match[1]);
                    }
                    let missingFnames = '';
                    function removeDuplicates(arr) {
                        return arr.filter((item,
                            index) => arr.indexOf(item) === index);
                    }
                    if (missingFunctions) {
                        const missingFunctionsWithoutDuplicate = removeDuplicates(missingFunctions)
                        missingFunctionsWithoutDuplicate.forEach(fn => {
                            missingFnames += fn + ' '
                        })
                    }
                    console.log("Error: Undefined references to the following functions:");
                    console.log(red, missingFnames, reset)
    
                } else
                    console.error(`Error executing command: ${error.message}`);
                return;
            }

            if (stderr) {
                console.log("⚠️ An error occurred:");
                console.error(`Command stderr: ${stderr}`);
                return;
            }
            let cmd = './testLaunch.out ' + args.f
            // functionNames.forEach(functionName => {
            //     launch('./testLaunch.out '+functionName, functionName)
            // })
            runTests(args.f);
        });
    }

    async function launch(command, fname) {
        const cursorToEnd = '\x1b[9999C'; // Moves cursor to end of line
        return new Promise((resolve, reject) => {
            // Create a unique prefix for the current function name
            const prefix = `${blue}Running ${fname}`;
            // Print the initial status message
            process.stdout.write(`${prefix}...`);
            exec(command, { timeout: 2500 }, (error, stdout, stderr) => {
                process.stdout.write('\r');
                // Move cursor to the start of the line
                if (error && error.signal === 'SIGTERM') {
                    console.log(yellow, "\r🕒  Time out... The function took too long to execute.");
                    console.log(`${red}\r⚠️ ${fname} : Test failed${reset}`);
                    failed = true;
                    resolve(true);
                    return;
                }
                if (error) {
                    failed = true;
                    console.log(`${red}\r⚠️ ${fname} Test failed${reset}`);
                    if (error.message.includes("Assertion")) {
                        let index = error.message.indexOf("Assertion");
                        let endIndex = error.message.includes("Aborted") ? error.message.indexOf("Aborted") : error.message.length;
                        let msg = error.message.substring(index, endIndex);
                        console.error(msg);
                    } else {
                        console.log(error.message);
                    }
                    reject(error);  // Reject the promise on error
                    return;
                }

                if (stderr) {
                    failed = true;
                    console.log("⚠️ Test failed");
                    console.error(`Command stderr: ${stderr}`);
                    reject(new Error(stderr));  // Reject the promise on stderr
                    return;
                }

                process.stdout.write(`${green}${bold}✓ ${fname} : Test passed${reset}                   \n`);
                resolve(stdout);  // Resolve the promise on success
            });
        });
    }

    async function runTests(fname) {
        if (fname !== 'all' || !fname) {
            try {
                await launch(`./testLaunch.out ${fname}`, fname);
            } catch (error) {
            }
            return;
        }
        for (const functionName of functionNames) {
            try {
                await launch(`./testLaunch.out ${functionName}`, functionName);
            } catch (error) {
            }
        }
        console.log("\n   === RESULT ===");
        if (failed) {
            console.log("⚠️ LIBFT Test failed");
        } else {
            draw_done(green);
            console.log(yellow, "✅ LIBFT ALL TESTS PASSED!");
        }
    }

}
