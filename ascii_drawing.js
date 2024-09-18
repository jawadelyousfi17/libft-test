const reset = '\x1b[0m';

function draw_done(color) {
    console.log(color, `
        
██████╗  █████╗ ███████╗███████╗███████╗██████╗ 
██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝██╔══██╗
██████╔╝███████║███████╗███████╗█████╗  ██║  ██║
██╔═══╝ ██╔══██║╚════██║╚════██║██╔══╝  ██║  ██║
██║     ██║  ██║███████║███████║███████╗██████╔╝
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═════╝ 
                                                

        `, reset)
}

function draw_intro(color)
{
    console.log(color,`
 ██╗██████╗ ██████╗ ███████╗
███║╚════██╗╚════██╗╚════██║
╚██║ █████╔╝ █████╔╝    ██╔╝
 ██║ ╚═══██╗ ╚═══██╗   ██╔╝ 
 ██║██████╔╝██████╔╝   ██║  
 ╚═╝╚═════╝ ╚═════╝    ╚═╝  
                            
`,reset)
console.log(`NOTE: write to fd functions tests are not included! \n      Bonus part also not uncluded!.`)
}

module.exports = { draw_done , draw_intro }