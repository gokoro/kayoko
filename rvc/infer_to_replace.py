import argparse
import os
import sys

from dotenv import load_dotenv
from scipy.io import wavfile

from configs.config import Config
from infer.modules.vc.modules import VC

from assets import prepare_assets

now_dir = os.getcwd()
sys.path.append(now_dir)

prepare_assets()

####
# USAGE
#
# In your Terminal or CMD or whatever


def arg_parse() -> tuple:
    parser = argparse.ArgumentParser()
    parser.add_argument("--f0up_key", type=int, default=0)
    parser.add_argument("--input_path", type=str, help="input path")
    parser.add_argument("--index_path", type=str, help="index path")
    parser.add_argument("--f0method", type=str, default="harvest", help="harvest or pm")
    parser.add_argument("--opt_path", type=str, help="opt path")
    parser.add_argument("--model_name", type=str, help="store in assets/weight_root")
    parser.add_argument("--index_rate", type=float, default=0.66, help="index rate")
    parser.add_argument("--device", type=str, help="device")
    parser.add_argument("--is_half", type=bool, help="use half -> True")
    parser.add_argument("--filter_radius", type=int, default=3, help="filter radius")
    parser.add_argument("--resample_sr", type=int, default=0, help="resample sr")
    parser.add_argument("--rms_mix_rate", type=float, default=1, help="rms mix rate")
    parser.add_argument("--protect", type=float, default=0.33, help="protect")

    args = parser.parse_args()
    sys.argv = sys.argv[:1]

    return args


def convert(input_path, output_path):
    load_dotenv()
    # args = arg_parse()
    config = Config()
    # config.device = args.device if args.device else config.device
    config.device = "cuda:0"
    # config.is_half = args.is_half if args.is_half else config.is_half
    config.is_half = False
    vc = VC(config)
    vc.get_vc("kokomi-kr.pth")
    _, wav_opt = vc.vc_single(
        0,
        input_path,
        5,
        None,
        "harvest",
        "./added_IVF522_Flat_nprobe_1_kokomi-kr_v2.index",
        None,
        1,
        3,
        0,
        0,
        0.33,
    )
    wavfile.write(output_path, wav_opt[0], wav_opt[1])
